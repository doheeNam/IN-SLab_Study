FROM python:3.5.3

WORKDIR /sample
COPY . /sample

EXPOSE 80

RUN pip install -r requirements.txt

CMD ["python","sample.py"]