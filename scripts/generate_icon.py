from PIL import Image

def make_square(image, size, output_path):
    width, height = image.size
    new_size = max(width, height)
    new_image = Image.new("RGBA", (new_size, new_size), (255, 255, 255, 0))

    paste_position = ((new_size - width) // 2, (new_size - height) // 2)
    new_image.paste(image, paste_position)

    resized_image = new_image.resize((size, size), Image.ANTIALIAS)
    resized_image.save(output_path)

input_image_path = './assets/BP.png'  # 素材画像のファイル名を指定してください
output_sizes = [16, 48, 128]

input_image = Image.open(input_image_path).convert("RGBA")

for size in output_sizes:
    output_image_path = f'icon{size}.png'
    make_square(input_image, size, output_image_path)
    print(f'Saved {output_image_path}')
