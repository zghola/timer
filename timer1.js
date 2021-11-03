const times = process.argv.slice(2)
// [1,2,3,5]
for (let time of times){
    if(time > 0 && !isNaN(time)){
        setTimeout(() => {
            process.stdout.write('\x07');
            
        }, time * 1000)
        
    }
   
}