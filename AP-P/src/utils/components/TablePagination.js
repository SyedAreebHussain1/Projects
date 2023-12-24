import React from 'react'
import { useNavigate } from 'react-router-dom'

const TablePagination = ({ total, range, setPageLimit, pageLimit, query }) => {
    const navigate = useNavigate()
    function next() {
        if (query) {
            navigate(`?page=${pageLimit.page + 1}&limit=${pageLimit.limit}`)
            return
        }
        setPageLimit((prev) => {
            return {
                page: prev.page + 1,
                limit: prev.limit,
            }
        })
    }
    function prev() {
        if (query) {
            navigate(`?page=${pageLimit.page - 1}&limit=${pageLimit.limit}`)
            return
        }
        setPageLimit((prev) => {
            return {
                page: prev.page - 1,
                limit: prev.limit,
            }
        })
    }
    return (
        <div className="w-full flex justify-between items-center pt-[38px] pb-[24px]">
            <button
                className="md:ml-[30px] w-[80px] md:w-auto md:px-[48px] md:py-[12px] text-[#232323] border-2 border-[#E3E3E3] !rounded-[50px]"
                onClick={prev}
                disabled={pageLimit.page === 1}
                style={{
                    opacity: pageLimit.page === 1 ? 0.8 : 1,
                    cursor: pageLimit.page === 1 ? 'not-allowed' : 'pointer',
                }}
            >
                Previous
            </button>
            <span className="text-[#515151] text-base font-medium">{`Page ${pageLimit.page
                } of ${Math.ceil(total / 10)}`}</span>
            <button
                className="md:mr-[15px] w-[80px] md:w-auto md:px-[48px] md:py-[12px] text-[#27A3A3] border-2 border-[#27A3A3] !rounded-[50px]"
                onClick={next}
                disabled={Math.ceil(total / 10) === pageLimit.page}
                style={{
                    opacity: Math.ceil(total / 10) === pageLimit.page ? 0.8 : 1,
                    cursor:
                        Math.ceil(total / 10) === pageLimit.page
                            ? 'not-allowed'
                            : 'pointer',
                }}
            >
                Next
            </button>
        </div>
    )
}

export default TablePagination
