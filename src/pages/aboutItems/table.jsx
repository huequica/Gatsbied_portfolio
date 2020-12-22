import React from 'react';
import * as Bulma from '@bulma';

// const Table = () => {
//   return (
//     <table className='table is-bordered'>
//       <tbody>
//         <tr>
//           <td>Name</td>
//           <td>Haru Yakumo</td>
//         </tr>
        
//         <tr>
//           <td>RealName</td>
//           <td>Harumi Ono</td>
//         </tr>

//         <tr>
//           <td>Live</td>
//           <td>Toyota, Aichi</td>
//         </tr>

//         { /* TODO: あとでここはそれぞれ別ページのリンクにしたいかも */ }
//         <tr>
//           <td>Like</td>
//           <td>MusicGame, Web Dev(FrontEnd), DDLC</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

const Table = () => {
  return (
    <>
      <Bulma.elements.Title is={ 2 }># Name</Bulma.elements.Title>
      <Bulma.elements.Title subTitle is={ 4 }>Haru Yakumo</Bulma.elements.Title>
      <Bulma.elements.Title is={ 2 }># RealName</Bulma.elements.Title>
      <Bulma.elements.Title subTitle is={ 4 }>Harumi Ono</Bulma.elements.Title>
      <Bulma.elements.Title is={ 2 }># Live</Bulma.elements.Title>
      <Bulma.elements.Title subTitle is={ 4 }>Toyota, Aichi</Bulma.elements.Title>
      <Bulma.elements.Title is={ 2 }># Like</Bulma.elements.Title>
      <Bulma.elements.Title subTitle is={ 4 }>MusicGame, Web Dev(FrontEnd), DDLC</Bulma.elements.Title>
    </>
  );
};

export default Table;
