import { ContainerCardFollow, ContainerImgFollow, ContainerTitleCardFollow, NumberTitleCardFollow, TitleCardFollow, ImgFollow, LinkCardFollow } from './styles'

import user1 from '../../assets/users/01.png'
import user2 from '../../assets/users/02.png'
import user3 from '../../assets/users/03.png'
import user4 from '../../assets/users/04.png'
import user5 from '../../assets/users/05.png'
import user6 from '../../assets/users/06.png'

const photos = [user1, user2, user3, user4, user5, user6]

interface PropsCardFollow {
    type: 'Seguindo' | 'Seguidores';
    quantity: string;
}

export function CardFollow ({ type, quantity }:PropsCardFollow) {
  return (
        <ContainerCardFollow>
            <ContainerTitleCardFollow>
                <TitleCardFollow>
                    {type}
                </TitleCardFollow>

                <NumberTitleCardFollow>
                    ({quantity})
                </NumberTitleCardFollow>
            </ContainerTitleCardFollow>

            <ContainerImgFollow>
                {photos.map((photo) => (
                    <ImgFollow
                        key={photo}
                        src={photo}
                    />)
                )
                }
            </ContainerImgFollow>

            <LinkCardFollow>
                Ver todos
            </LinkCardFollow>
        </ContainerCardFollow>
  )
}
