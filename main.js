var array=[22,12,24,55,44];


var small=array[0];
for(i=0;i<array.length;i++){
	if(array[i]<=small){
		small=array[i];
	}
}
	document.write(small);