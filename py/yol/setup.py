from setuptools import setup, find_packages


setup(
    name='yol',
    version='0.1',
    license='MIT',
    author="Halit Erdogan",
    author_email='haliterdogan@gmail.com',
    packages=find_packages('src'),
    package_dir={'': 'src'},
    url='',
    keywords='yol',
)