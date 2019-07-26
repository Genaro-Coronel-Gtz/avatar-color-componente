import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'avatar-color',
  styleUrl: 'avatar.scss',
  shadow: true,
})
export class AvatarColor {

  @Prop()  nombre: string;
  @Prop() size: string;
  @Prop() colores: Array<String>;


  render() {
   
   
    function randomBetween(min, max) {
      return Math.floor(Math.random() * (+max - +min)) + +min;
  }

    const componente = document.querySelector('avatar-color');

    var colores = componente.attributes['colores'].value;
        colores = colores.split(',');

    var randomIndex = randomBetween(0, colores.length);

    const colorText = { color:  'white' } ;
    var customClass = 'avatar-circle';
    var randomColor = {background: colores[randomIndex]};
    
    if(this.size == 'sm'){
      customClass = 'avatar-circle-sm';
    }else if(this.size == 'lg'){
      customClass = 'avatar-circle-lg';
    }else{
      customClass = 'avatar-circle';
    }

    return (
        <div class={customClass} style={ randomColor }>
            <span class="initials" style =  { colorText }>
              {this.nombre}
            </span>
       </div>
    )
  }
}