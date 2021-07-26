let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop()

secretMessage.push('to', 'program')



secretMessage[7] = 'good'

secretMessage.unshift('Programming')
secretMessage.splice(6,6,'you','know')
console.log(secretMessage.join(' '))