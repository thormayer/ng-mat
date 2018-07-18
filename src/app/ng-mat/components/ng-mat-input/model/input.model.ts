
interface Placeholder{
    focus: boolean;
    active: boolean;
    error: boolean;
}

interface Container{
    active: boolean;
    error: boolean;
}
interface Text{
    active: boolean;
}

export class ngMatInput{
    public placeholder? : string;
    public text?: string;
    private styles = {
        placeholder: "placeholder",
        text: "input-class",
        container: "input-container"
    }

    private state: 
        { placeholder: Placeholder, container: Container, text: Text } = 
    {
        placeholder: {
            focus: false,
            active: false,
            error: false
        },
        container: {
            active: false,
            error: false
        },
        text: {
            active: false
        }
    }

    constructor( _placeholder){
        this.placeholder = _placeholder;
        this.setInitializedState();
    }

    public setText(text){
        this.text = text;
    }

    public getText(){
        return this.text;
    }
      
    private setInitializedState(){
        this.state.placeholder.focus = this.text ? true : false;
        this.state.text.active = this.text ? true : false;
        this.state.container.active = false;
    }
  

    public setContainerActive(isActive){
        this.state.container.active = isActive;
    }

    public setPlaceholderError(isActive){
        this.state.placeholder.error = isActive;
    }

    public setContainerError(isActive){
        this.state.container.error = isActive;
    }

    public setInputActive(isActive){
        this.state.text.active = isActive;
        this.state.placeholder.active = isActive;
    }

    public setPlaceholderFocus(isActive){        
        this.state.placeholder.focus = isActive;
    }

    public setPlaceholderActive(isActive){
        this.state.placeholder.active = isActive;
    }
    
    public renderPlaceholder(){
        return this.render(this.state.placeholder, this.styles.placeholder);
    }
    
    public renderContainer(){
        return this.render(this.state.container, this.styles.container);
    }
    public renderInput(){
        return this.render(this.state.text, this.styles.text);
    }

    private render(obj, domain){ // iterate over state
        let str = domain;
        Object.keys(obj).forEach((el, i)=>{
            if(obj[el]) str += ' ' + el;  
        })
        return str;
    }

 
  
}

