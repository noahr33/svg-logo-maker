class Shapes{
    constructor() {
        this.color = ''
    } 
    shapeColor(color) {
        this.color = color
    }
}

export class Circle extends Shapes {
    render() {
       return `<circle cx="150" cy="100" r="80" width="300" height="200" fill=${this.color}/>`
    }
}

export class Triangle extends Shapes {
    render() {
        return `<rect x="50" width="200" height="200" fill=${this.color}/>`
    }
}

export class Square extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill=${this.color}/>`
    }
}

