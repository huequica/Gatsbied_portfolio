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

// TitleModule alias
const Title = Bulma.elements.Title;

const Table = () => {
  return (
    <>
      <Title is={ 2 }># Name</Title>
      <Title subTitle is={ 4 }>Haru Yakumo</Title>
      <Title is={ 2 }># RealName</Title>
      <Title subTitle is={ 4 }>Harumi Ono</Title>
      <Title is={ 2 }># Live</Title>
      <Title subTitle is={ 4 }>Toyota, Aichi</Title>
      <Title is={ 2 }># Like</Title>
      <Title subTitle is={ 4 }>MusicGame, Web Dev(FrontEnd), DDLC</Title>
    </>
  );
};

export default Table;
