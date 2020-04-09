import requests
from bs4 import BeautifulSoup

url = 'http://www.tssgsc.com/ljj20170817/products/15663731_0_0_1.html'
domain = 'http://www.tssgsc.com'
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'}
html = requests.get(url, headers=headers)
soup = BeautifulSoup(html.text, 'lxml')
data = soup.select('div.oneClassTinner')

span_list = []
for item in data:
    category_url = domain + item.find('a')['href']
    category_html = requests.get(category_url, headers=headers)
    category_soup = BeautifulSoup(category_html.text, 'lxml')
    content_data = category_soup.select('#Mo_185 .inner')
    content = []
    for content_item in content_data:
        if (not content_item.find('span', {'class': 'newPrice'})):
            continue
        c = {
            "fruit_name": content_item.a['title'],
            "fruit_href": domain + content_item.a['href'],
            "fruit_img": content_item.img['src'],
            "fruit_price": content_item.find('span', {'class': 'newPrice'}).em.string
        }
        content.append(c)
    span = {
        'category': item.get_text().strip(),
        'content': content
    }
    span_list.append(span)

print(span_list)
