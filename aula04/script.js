const agenda=[1,2,3]
const reserva=3

if(agenda.includes(reserva)){console.log('Reserva Indisponivel')}
else {
        console.log('Sua Reserva foi agendada!')
        agenda.push(reserva)
}

console.log(agenda.sort())