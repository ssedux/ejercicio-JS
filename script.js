document.getElementById('calcular').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);

    if (!nombre || isNaN(cantidad) || cantidad <= 0) {
        alert('Por favor, ingresa un nombre y una cantidad válida.');
        return;
    }

    const billetes = calcularBilletes(cantidad);

    const resultadoHTML = `
        <div class="container mt-5">
        <h3>Hola ${nombre}, tu retiro ha sido realizado de la siguiente manera:</h3>
        <div class="d-flex justify-content-center bg-dark text-light"> 
            <p class="billetes">Billetes de $100: ${billetes[100]}</p>
            <p class="billetes">Billetes de $50: ${billetes[50]}</p>
        </div>
        <div class="d-flex justify-content-center bg-dark text-light"> 
            <p class="billetes">Billetes de $20: ${billetes[20]}</p>
            <p class="billetes">Billetes de $10: ${billetes[10]}</p>
        </div>
        <div class="d-flex justify-content-center bg-dark text-light"> 
            <p class="billetes">Billetes de $5: ${billetes[5]}</p>
            <p class="billetes">Billetes de $1: ${billetes[1]}</p>
        </div>
    </div>
    `;

    document.getElementById('resultado').innerHTML = resultadoHTML;
});

function calcularBilletes(cantidad) {
    const billetes = {
        100: 0,
        50: 0,
        20: 0,
        10: 0,
        5: 0,
        1: 0
    };

    const denominaciones = [100, 50, 20, 10, 5, 1];

    for (const denom of denominaciones) {
        if (cantidad >= denom) {
            billetes[denom] = Math.floor(cantidad / denom);
            cantidad %= denom;
        }
    }

    return billetes;
}