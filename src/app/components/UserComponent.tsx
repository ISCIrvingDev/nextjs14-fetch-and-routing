// 'use client' es exclusivo de NextJS
// Es para decirle a NextJS que es un componente del lado del cliente
// Asi se pueden usar los hook de React como "onClick", "useEffect", "useState", "useRouter", etc. En general caracteristicas propias del lado del cliente y no instrucciones del lado del servidor.
// En terminos generales es mejor que se renderize en el server por temas de performace y SEO, pero en ocaciones como esta sera necesario que sea un "Cliente Component" y no un "Server Component"
'use client';

import React from 'react'
import { IUserDto } from '../services/dtos/user.dto'
import { useRouter } from 'next/navigation';

// export default function UserComponent() {
//   return (
//     <div>
//       <h1>About</h1>

//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, veritatis mollitia ullam facilis sit consequuntur assumenda, nostrum facere fuga ab veniam nemo placeat quia ad dolorum vero velit quaerat saepe. Nostrum in reiciendis id maiores tenetur at itaque, dolorem alias vitae! Alias eveniet quibusdam, minima hic dicta a. Magni fuga magnam eius impedit eum. Voluptatum libero aliquid ex explicabo accusantium cumque! Libero doloremque vel, sit quae fugit dolorum aut animi perferendis dolorem rerum, ipsum illum molestiae iusto impedit illo? Cumque nihil repudiandae adipisci ad libero tempora natus nemo incidunt a rem, officia pariatur earum, quas atque perferendis minima ducimus aut.
//       </p>
//     </div>
//   )
// }

interface IUserProp {
  users: IUserDto
}

export const UserComponent: React.FC<IUserProp> = ({ users }) => {
  // Hooks
  const router = useRouter();

  // Handlers
  const toUserId = (id: number) => {
    router.push(`/user/${id}`);
  }

  return (
    <ul>
      {
        users.data.map(user => (
          <li
            key={user.id}
            onClick={() => { toUserId(user.id) }}
          >
            <div>
              <h5>{`${user.id}: ${user.first_name} ${user.last_name}`}</h5>

              <p>{user.email}</p>

              <img src={user.avatar} alt={user.email} />
            </div>
          </li>
        ))
      }
    </ul>
  )
}

export default UserComponent