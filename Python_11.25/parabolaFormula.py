'''
포물선 공식을 이용한 물체의 궤적, 비행시간 및 거리 구하기
'''

import math
from math import pow,ceil
from matplotlib import pyplot as plt


GRAVITY = 9.81
INTERVAL = 0.001


#포물선을 표시하기 위한 배열 만드는 함수
def timeArray(start, end, step):
    times = []
    while start < end:
        times.append(start)
        start += step
    return times

#포물선 그리는 함수
def draw_parabola(xVelocity, yVelocity):
    flyTime = 2 * yVelocity / GRAVITY

    flyDistance = xVelocity * flyTime

    intervals = timeArray(0, flyTime, INTERVAL)

    x = []
    y = []

    for t in intervals:
        x.append(xVelocity * t)
        y.append(yVelocity * t - 0.5 * GRAVITY * math.pow(t,2))

    plt.plot(x,y)
    plt.xlabel('x vector velocity is ' + str(xVelocity)+'m/s')
    plt.ylabel('y vector velocity is ' + str(yVelocity)+'m/s')
    plt.title('Fly time is ' + str(math.ceil(flyTime)) + 's, Distance is ' + str(math.ceil(flyDistance)))

if __name__ == '__main__':
    try:
        xVelocity = float(input('Enter the x vector velocity(m/s): '))
        yVelocity = float(input('Enter the y vector velocity(m/s): '))
    except ValueError:
        print('You Entered an invalid input')
    else:
        draw_parabola(xVelocity, yVelocity)
        plt.show()
              
