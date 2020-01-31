import React, { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'

import './style.css'

interface UserList {
  id: number,
  // eslint-disable-next-line camelcase
  first_name: string,
  // eslint-disable-next-line camelcase
  last_name: string,
  avatar: string
}

const UserList = () => {
  const [userList, setUserList] = useState([] as UserList[])
  const [loading, setUserListLoading] = useState(false)
  const [pageNo, setPageNo] = useState(1)
  const [totalPages, setTotalPages] = useState(-1)

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  })

  useEffect(() => {
    if (pageNo === totalPages + 1) return
    setUserListLoading(true)
  }, [pageNo, totalPages])

  useEffect(() => {
    if (loading) {
      fetch(`${process.env.REACT_APP_BASE_URL}?page=${pageNo}`)
        .then(response => response.json())
        .then(({ data: usersFetched, total_pages: totalPages, page }) => {
          if (page === 1) setTotalPages(totalPages)
          const users = [...userList, ...usersFetched]
          setUserList(users)
          setUserListLoading(false)
        })
    }
  }, [loading])

  const listRenderer = () => (
    <ul className="List-root">
      {userList.map(({ id, first_name: firstName, last_name: lastName, avatar }) => (
        <li key={id} className='List-item'>
          <img src={avatar} className="Avatar"/>
          {`${firstName} ${lastName}`}
        </li>
      ))}
    </ul>
  )

  const onScroll = ({ target }: any) => {
    if (pageNo === totalPages + 1) return
    if (target.scrollTop + target.clientHeight >= target.scrollHeight) {
      setPageNo(prevPageNo => prevPageNo + 1)
    }
  }

  return (
    <div className="List-div" onScroll={onScroll}>
      {listRenderer()}
      {loading && <Loader type="ThreeDots" color="green" height={40} width={40} />}
      {(pageNo === totalPages + 1) && <div> No More Users To Show </div>}
    </div>
  )
}

export default UserList
