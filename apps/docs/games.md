> [Home](../../README.md) 

# Games

1 type - Slot Machine.

Slot Machine in JS (Spanish version below)

Slot machine in pure HTML/CSS/JavaScript.

The game rules are the following:

- You can bet as money as you have in bank. You start with 50 units. You can change the money for betting changing the number in the box (initially 10 units)
- If you reach 100 units you win, if you down to 0 you lose.
- Each bet allow you to spin the three slots once by pressing spin button. The slots will start to stop when you release this button.
- You can bet one more time only one slot by pressing the slot you want spin (marking with yellow background). Then you have to make another bet to spin all slots again.
- There are six different results in the slots with this values:
  - Lemon & Orange: 0
  - Bannanas: 0.5
  - Watermelon & Cherries: 1
  - Star: 2
- The prize is calculed in this way:
  - Prize starts with 0 and "add/multiply" the prize of each slot from left to right.
  - If the current slot's value is 0 the current prize is 0.
  - If current slot's value is greater than zero and the current prize calculated is 0, the current slot's value is added (so the current prize is the current slot value)
  - If current prize is greater than 0, the current prize is multiplied by current slot's value.
  - If all slots have the same result, the final prize is multiplied by 3.

You can check your balance in the dinamic graph below (last 15 banks).

_vs 1.0.9_
