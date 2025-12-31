import logging
import os
from typing import Annotated

import typer
from PIL import Image

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)
logger.info('Started')

def resize_files(
        src_dir: Annotated[str, typer.Argument(help="Directory containing raw files for processing. These will not be updated")],
        target_dir: Annotated[str, typer.Argument(help="Target directory for modified files.")],
        target_width_px: Annotated[int, typer.Argument(
            help="Target width for all images. The aspect ratio for the height will be preserved. Leave blank to preserve image size. " +
            "This will just strip the metadata."
        )] = -1,
        dry_run: Annotated[bool, typer.Argument(help="Log only mode")] = False
):
    if not os.path.isdir(src_dir):
        raise ValueError(f'Provided ${src_dir} is not a directory')
    if not os.path.isdir(target_dir):
        raise ValueError(f'Provided ${target_dir} is not a directory')

    directory = os.fsencode(src_dir)

    for file in os.listdir(directory):
        filename = os.fsdecode(file)
        infile = src_dir + "/" + filename
        logger.info(f"Processing {infile}")
        extension = infile.split(".")[-1]
        logger.info(f"File extension is " + extension)
        outfile = target_dir + "/" + filename
        try:
            with Image.open(infile) as original_im:
                aspect_ratio = original_im.width / original_im.height

                new_im = original_im
                if target_width_px > 0:
                    new_height = calculate_new_height(aspect_ratio, target_width_px)
                    logger.info(f"Resizing {filename} to {target_width_px}, {new_height}")
                    new_im = original_im.resize((target_width_px, new_height))

                match extension:
                    case "jpg":
                        logger.info(f"Exporting {filename} as JPEG")
                        if not dry_run:
                            new_im.save(outfile, format='JPEG', subsampling=0, quality=95)
                    case "png":
                        if not dry_run:
                            new_im.save(outfile)
                    case _:
                        raise ValueError(f"Unexpected extension: {extension}")
                logger.info(f"Saved {filename} to {outfile}")
        except OSError:
            logger.exception("Failed to save image")

    return


def calculate_new_height(aspect_ratio: float, target_width: int) -> int:
    """
    aspect_ratio = original_width / original_height

    new_height = target_width / aspect_ratio
    """
    return int(target_width / aspect_ratio)

if __name__ == "__main__":
    typer.run(resize_files)