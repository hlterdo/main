import svgwrite

def create_logo(file_name, size, text, font_family, font_size, circle_radius):
    dwg = svgwrite.Drawing(file_name, profile='tiny', size=(size, size))

    circle = dwg.circle(center=(size/2, size/2), r=circle_radius, fill='none', stroke='black', stroke_width=3)
    dwg.add(circle)

    text_element = dwg.text(text, insert=(size/2, size/2 + font_size//2 - font_size//10), fill='black')
    text_element['font-family'] = font_family
    text_element['font-size'] = font_size
    text_element['font-weight'] = 'bold'
    text_element['text-anchor'] = 'middle'
    dwg.add(text_element)

    dwg.save()

if __name__ == '__main__':
    file_name = 'logo.svg'
    size = 512
    text = 'N'
    font_family = 'Arial'
    font_size = 256
    circle_radius = 250
    create_logo(file_name, size, text, font_family, font_size, circle_radius)
