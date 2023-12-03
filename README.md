# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

-> Bullet point: CONSISTENT with .js or .jsx, otherweise the code chain can not load to webpage.

src/EScooterAccidents.json
2023-11-30 
-> Data in this file was collected from News involving EScooters in Bochum Police District.
-> If data is copied and pasted, select pasted data in .json and right click, select 'Format Selection' to batch format pased database.

-> Beginners might note things down in README, cause I recently found out that inconsistent commt formats would trigger problems and .jsx just kept showing this black red crash-down windows.

src/Filter.jsx
2023-11-30
-> For the display of data sets, I chose card with list groups. To fetch data from .json just use curly brace {}.
-> <div className="container mb-5"> here m stands for margin, b stands for buttom,'-' passes a value and 5 means 5rem.
-> <div className = "col-md-3"> stands for colume-breakpoint(md stands for Medium with max-width 720px).

git push trouble-shooting
2023-12-01
1-> git init
2-> git branch -M main
3-> git remote add origin https://....git
x1-> git remote rm origin
x2-> git remote add origin https://github.com/....git
4-> git add .
5-> git push -u origin main



