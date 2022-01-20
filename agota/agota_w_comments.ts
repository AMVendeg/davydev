// this is a little special name day app for Ágota :)

// import * as fs from 'fs';

class NameDay {
    name: string;
    date: string;
    abcletters: string [];
  
    constructor(name: string, date: string) {
      this.name = name;
      this.date = date;
      this.abcletters = [
        'a', 'á', 'b', 'c', 'd', 'e', 'é', 'f', 'g', 
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
        'ö', 'p', 'q', 'r', 's', 'sz', 't', 'ü', 
        'ű', 'u', 'ú', 'v', 'x', 'y', 'z', 'zs'];
    }
  
    congrat(): string {
      return `Happy name day to ${this.name}`;
    }
  
    surprise(): void {
      console.log(`\n***  ***\n********\n ******\n  ****\n   **\n`);
    }
  
    nameLetterCounter(name: string): void {
      // npm install underscore
      // let under = require('underscore');
      // let solution = under.intersection(splittedName, this.abcletters); 
  
      let splittedName = name.split('');
      let abcLetters = [
        'a', 'á', 'b', 'c', 'd', 'e', 'é', 'f', 'g', 
        'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
        'ö', 'p', 'q', 'r', 's', 'sz', 't', 'ü', 
        'ű', 'u', 'ú', 'v', 'x', 'y', 'z', 'zs'];
        
        splittedName.forEach(function(source){
          console.log(source, 'is at', abcLetters.indexOf(source), 'position in ABC');
        });
      }
      
      happinessCounter(): string {
        // LoveInTheAir level counter  (*****)
        let number: number = Math.floor(Math.random()* 20);
        let repeatedString = '*';
        return `\nExpected happiness level tomorrow: ${repeatedString.repeat(number)}\n`;
      }
  
      nameOfAncientScandinavian(): string {
        let yourScandinavianName: string = '';
        let scandinavianNameList: string [] = ['Aslaug', 'Bjørg', 'Freydis', 'Frida', 'Ingrid', 
        'Nanna', 'Sigrid', 'Siv', 'Tyra', 'Valkyrie'];
        let randomIndexNumber: number = Math.floor(Math.random() * (scandinavianNameList.length -1))
        return yourScandinavianName = `Your scandinavian ancient name is: ${scandinavianNameList[randomIndexNumber]}\n`;
      }
    }
  
    export { NameDay };
    
  /*
    try {
      fs.writeFileSync('for_your_nameday.txt', '');
      let nameDay = fs.readFileSync('for_your_nameday.txt', 'utf-8');
      // console.log(nameDay);
    } catch (error) {
      console.log('Houston, We have a problem.');
    }
  */