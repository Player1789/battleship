# General

This program is made with `React - JavaScript/TypeScript`, `React-redux`.<br/>
When you click the start button, the app allocates ships randomly.<br/>
Once players hit all the ships, the app ask players to re-start the game.

### Prerequisite

```
npm install
```

### Run

```
npm start
```

### Test

```
npm test
// Press 'a' to run all tests
```

### Node & npm version

- npm ^@8.15.0
- node ^@18.7.0

<br/>
<br/>

# Highlights

### **Ship allocation**

To allocate ships randomly, the program tries to pick the position of a ship randomly and check the validation of the position, if it is not valid, it tries again. I let it try to allocate ships 100 times per ship in `assignShipPosition function`. If the app failed to allocate positions, it throws an error.

---

### **React-redux**

I used react-redux for state management. GamseStatus has the properties below:

- **status**: status of the current game
- **turn**: index of the current turn player
- **mapSize**: map size [x, y]
- **map**:
  - **key**: string of position array ([x, y])
  - **value**:
    - **ship**: allocated ship in that cell or null
    - **hit**: the cell is hit or not
- **ships**: array of shipTypes
  - **name**: name of a ship
  - **size**: number of cell counts that a ship takes
  - **pointPerShot**: point that a player will get once a player hit the ship position
  - **hitCount**: number of cells that is hitted

### **map**

Map object has a position([x, y]) string as a key.
So when a player clicked a cell, we can find a value (allocated ship, hit) of the position in log(N).

---

### **Test**

Tests are covering the unit tests of redux reducers.

<br/>
<br/>

# Thought

- Thank you for giving me an opportunity to take such a fun coding challenge 🤣
