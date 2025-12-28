import logging
from typing import Annotated
import os
from PIL import Image

import typer

logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)
logger.info('Started')

def resize_files(
        src_dir: Annotated[str, typer.Argument(help="Directory containing raw files for processing. These will not be updated")],
        target_dir: Annotated[str, typer.Argument(help="Target directory for modified files.")],
        new_width_px: Annotated[int, typer.Argument(
            help="Target width for all images. The aspect ratio for the height will be preserved. Leave blank to preserve image size. " +
            "This will just strip the metadata."
        )] = -1
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
        outfile = target_dir + "/" + filename
        try:
            with Image.open(infile) as im:
                # TODO This code assumes src_dir is full of JPEG files.
                im.save(outfile, format='JPEG', subsampling=0, quality=95)
                logger.info(f"Saved {filename} to {outfile}")
        except OSError:
            logger.exception("Failed to save image")

    return

if __name__ == "__main__":
    typer.run(resize_files)