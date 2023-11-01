En JavaScript, el valor de `this` puede cambiar dependiendo de cómo se llama una función. En este caso, al asignar métodos a eventos en el constructor de la clase `TodoController`, se pierde la referencia `this`.

Es decir, al asignar el método `this.service.addTodo` a `this.view.bindAddTodo`. Cuando `addTodo` se ejecuta desde `view`, pierde su conexión con la instancia de `TodoController`. 
