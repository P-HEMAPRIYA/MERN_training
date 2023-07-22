class CalendarDay{
    #month;
    #day;
    #year;
    constructor(year, month ,day){
        this.month=month;
        this.day=day;
        this.year=year;
    
    }
    toString() {
        return`${this.year}-${this.month+1}-${this.day}`;
    }
}

let day1=new CalendarDay(2023,0,1);//creating an object
let day2=new CalendarDay();
console.log(day1.toString());
console.log(day2);