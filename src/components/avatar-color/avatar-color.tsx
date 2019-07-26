import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'avatar-color',
  styleUrl: 'avatar.scss',
  shadow: true,
})
export class AvatarColor {

  @Prop()  nombre: string;
  @Prop() size: string;
  @Prop() textColor: string;

  render() {
    function randomBetween(min, max) {
      return Math.floor(Math.random() * (+max - +min)) + +min;
    }

    const componente = document.querySelector('avatar-color');

    var colores = componente.attributes['colores'].value;
        colores = colores.split(',');

    var randomIndex = randomBetween(0, colores.length);

    const colorText = { color:  this.textColor } ;
    var customClass = 'avatar-circle';
    var randomColor = {background: colores[randomIndex]};

    if(this.size == 'xsm'){
      customClass = 'avatar-circle-xsm';
    }else if(this.size == 'sm'){
      customClass = 'avatar-circle-sm';
    }else if(this.size == 'std'){
      customClass = 'avatar-circle-std';
    }else if(this.size == 'lg'){
      customClass = 'avatar-circle-lg';
    }else if(this.size == 'xlg'){
      customClass = 'avatar-circle-xlg';
    }else{
      customClass = 'avatar-circle';
    }

    return (
        <div class={customClass} style={ randomColor }>
            <span class="initials" style =  { colorText } >
              {this.nombre}
            </span>
       </div>
    )
  }
}
