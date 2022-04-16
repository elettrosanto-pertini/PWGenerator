
# random passwordona
import random
import math
# MAIN


def generatePassword(n):
    assert n >= 15 and n <= 222, 'La password deve essere lunga tra i 10 e i 222 caratteri'
    risultato = ""
    letters = math.floor(n*0.3)
    otherChars = n-letters
    numbers = math.floor(otherChars*0.33)
    upperCase = math.ceil(otherChars*0.33)
    specialChars = otherChars-numbers-upperCase
    for i in range(letters):
        risultato = risultato+carattereRandom('abcdefghijklmnopqrstuvwxyz')

    for i in range(numbers):
        risultato = randomInsertInto(risultato, carattereRandom('1234567890'))

    for i in range(upperCase):
        risultato = randomInsertInto(
            risultato, carattereRandom('QWERTYUIOPASDFGHJKLZXCVBNM'))

    for i in range(specialChars):
        risultato = randomInsertInto(
            risultato, carattereRandom('!?%&$@#+[]\{\}-_./'))

    return risultato

# CARATTERE RANDOM


def carattereRandom(setOfCharacters):
    # @param setOfCharacters: string - a set of characters
    # @return: string - a single character from the set
    posizione = random.randint(0, len(setOfCharacters)-1)
    return setOfCharacters[posizione]

# INSERISCI RANDOM


def randomInsertInto(stringa, carattere):
    # @param stringa: string
    # @param carattere: str char
    # @ return: string
    posizione = random.randint(0, len(stringa)-1)
    risultato = stringa[:posizione]+carattere+stringa[posizione:]
    return risultato


print(generatePassword(25))