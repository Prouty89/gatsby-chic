import styled from 'styled-components';


{/*HOMEPAGE*/}
{/*MEET*/}
export const HeroPages = styled.div`

.hero1{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 902px;
}


.carousel{
  display:flex;
  height: 600px;
  align-items: center;
  justify-content: center;
}

.hero-breakone{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mantra{
  display: flex; 
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-bottom: 0px;
}
.logo{
  display: flex;
  border: 1px solid black;
  width: 300px; 
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-bottom: 0px;
}

.quote-container{
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-2{
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  height: 902px;
}

.images{
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;

  .image{
    background: black;
    color: white;
    width: 400px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.images-grid{
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  justify-items: center;
  grid-row-gap: 20px;
  
  @media(max-width: 1337px){
    display: flex;
    align-items: center;
    flex-direction: column;
    
  }

  .image{
    background: black;
    color: white;
    width: 600px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 1337px){
      margin-bottom: 20px;
    }
  }
}

.hero-breaktwo{
  display:flex;
  justify-content: space-around;
  width: 90%;
}
`