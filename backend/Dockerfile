FROM python:2.7
ENV PYTHONUNBUFFERED 1
RUN mkdir /slm
WORKDIR /slm
ADD requirements.txt /slm/
RUN pip install -r requirements.txt
#ADD . /slm/
