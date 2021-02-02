function Get(){
    let size = 0
    for(let i=localStorage.length - 1 ; i >=0; i--){
        let str = String(localStorage.getItem(localStorage.key(i)))
        size = str.length + size
    }
    return (size / 1024).toFixed(2) + 'KB'
}

export default {Get}