from typing import Annotated
import os, sys
# from PIL import Image

import typer


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

    directory = os.fsencode(src_dir)

    for file in os.listdir(directory):
        filename = os.fsdecode(file)
        print(f"Processing {filename}")

    return

if __name__ == "__main__":
    typer.run(resize_files)