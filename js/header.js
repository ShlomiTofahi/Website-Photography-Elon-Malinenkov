class PersonalBtn{
     
}

PersonalBtn.choose = function(_personal_btn = id_btn,nav = id_nav){
        this.show = false;
        id_nav.style.display = "none";
        _personal_btn.onclick = function(){
            if(!this.show){
                this.show = true;
                id_nav.style.display = "block";
            }
            else{
                this.show = false;
                id_nav.style.display = "none";
            }
        }
}