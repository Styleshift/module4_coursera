var names=new Array();
names[0]="Keenan";
names[1]="Paola";
names[2]="Marva";
names[3]="Abad";
names[4]="Shadow";
names[5]="Corey";
names[6]="James";
names[7]="Justin";
names[8]="Rahsan";
names[9]="Nigel";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}