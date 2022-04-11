import { Link, useParams } from 'react-router-dom';


function Oquvchilarr({appState}){

    const {username} = useParams();


    return(
        <>
        <h1>O'quvchilar Ro'yxati</h1>

        {
        appState?.filter(u => u.userFN === username).map(t => {
          return (
            <li key={t.id}>FullName: {t.userFN} {t.userLN} <br />
            Otasining ismi: {t.userMN} <br />
            Sinfi: {t.userD} <br />
            Foydalanuvchi raqami: {t.userId} <br />
            Online vaqti: {t.dateTime} <br />
            Status: {String(t.isCome)}
            </li>
          )
        })
      }

      <Link style={{color: 'blue'}} to='/'>Asosiy sahifaga o'tish</Link>

        </>
    )
}

export default Oquvchilarr;