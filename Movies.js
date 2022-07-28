//Movies and genres 

function Elemento (Movies1, Movies2, Movies3, Movies4, Movies5, Movies6, Movies7, Movies8, Movies9){
    this.Movies1 = Movies1
    this.Movies2 = Movies2
    this.Movies3 = Movies3
    this.Movies4 = Movies4
    this.Movies5 = Movies5
    this.Movies6 = Movies6
    this.Movies7 = Movies7
    this.Movies8 = Movies8
    this.Movies9 = Movies9
  }
  
  const Horror = new Elemento ("The Witch", "The Shinning", "Saw", "The conjuring")
  
  const Drama = new Elemento ("The Notebook", "Spencer", "CODA", "Brokeback Mountain")
  
  const Comedy = new Elemento ("Parasite", "Juno", "Don't Look Up", "Project X")
  
  const Action = new Elemento ("Inception", "Avatar", "Free Guy", "Thor", "Black Panther")
  
   
  const Musicals = new Elemento ("Chicago", "Moulin Rouge", "Sing", "Tic Tick Boom", "La La Land")
  
  const Scifi = new Elemento ("Star Trek", "Star Wars", "Dune", "The Adam Project")

  const Docummentary = new Elemento ("Paris is Burning", "March of the Penguins", "When We Were Kings", "Minding the Gap")

  const Fantasy = new Elemento ("Hrry Potter", "The Lord of the Rings", "El Laberinto del Fauno", "The Chronicles of Narnia", "Alice in Wonderland" )

  const Independent = new Elemento ("Reservoir Dogs", "Sex, Lies and Videotape", "Pink Flamingos", "Trainspotting", "Donnie Darko" )

  let Genre= [Horror, Drama, Comedy, Action, Fantasy, Independent]
  Genre.push(Musicals, Scifi, Docummentary)
  console.log(Genre)