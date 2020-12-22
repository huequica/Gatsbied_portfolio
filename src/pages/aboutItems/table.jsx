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
      <Bulma.elements.Title subTitle># Name</Bulma.elements.Title>
      Haru Yakumo
      <Bulma.elements.Title subTitle># RealName</Bulma.elements.Title>
      Harumi Ono
      <Bulma.elements.Title subTitle># Live</Bulma.elements.Title>
      Toyota, Aichi
      <Bulma.elements.Title subTitle># Like</Bulma.elements.Title>
      MusicGame, Web Dev(FrontEnd), DDLC
    </>
  );
};

export default Table;
