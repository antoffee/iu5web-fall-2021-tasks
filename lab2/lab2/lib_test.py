import requests;

def main():
    r = requests.get('https://api.github.com/events')
    print('Проверяем библиотеку requests:')
    print("Код возврата:" + str(r.status_code))

if __name__ == "__main__":
    main()