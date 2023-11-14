// Obtener los parametros del lado del cliente: Usar 'use client' con "useParams".
// 'use client';

// Obtener los parametros del lado del servidor: Pasar un objeto con la propiedad "params" para acceder a los parametros por medio de esa propiedad.
// Para tipar los parametros, basarse en el ejemplo de la interface "IRouterParams"

import React from 'react'
import { UserIdServ } from './services/user-id.service';
// import { useParams } from 'next/navigation'

// export default function UserIdPage() {
//   return (
//     <div>
//       <h1>
//         Info Page
//       </h1>

//       <p>
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore velit est tempora modi ab! Dolorum expedita consequatur unde! Blanditiis placeat voluptatem recusandae fugit animi doloribus, provident sed, at autem ut dolor, consequatur rem ipsam. Suscipit, doloremque. Recusandae ullam impedit doloremque, nesciunt inventore consequuntur nostrum odit soluta aliquid omnis sapiente consectetur.
//       </p>
//     </div>
//   )
// }

interface IRouterParams {
  params: IParams
}
interface IParams {
  id: number
}

export const UserIdPage: React.FC<IRouterParams> = async ({ params }) => {
  // const params = useParams();
  // console.log('El id es: ', params);

  // onInit
  const infoUserDetails = await UserIdServ.getUserDetails(params.id);
  const userDetails = infoUserDetails.data

  return (
    <div>
      <h1>
        User Details
      </h1>

      <div>
        <img src={userDetails.avatar} alt={userDetails.email} />

        <h3>{`${userDetails.id}: ${userDetails.first_name} ${userDetails.last_name}`}</h3>

        <p>{userDetails.email}</p>
      </div>
    </div>
  )
}

export default UserIdPage
