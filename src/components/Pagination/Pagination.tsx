import React, {useMemo} from 'react';
import cn from "classnames";
import s from "./Pagination.module.css";

interface IPagination {
    page: number;
    setPage: any;
    totalCount: number;
    setTotalCount: any;
    limit: number;
}

const Pagination:React.FC<IPagination> = ({
    page,
    setPage,
    totalCount,
    setTotalCount,
    limit,
}) => {
    let pages = [];
    // при помощи useMemo, сокращаем количество пересчетов ф-ий.
    pages = useMemo(() => {
        let result = [];
        for(let i = 0; i < totalCount/limit; i++) {
            console.log('Пересчет')
            result.push(i + 1);
        }
        return result;
    }, [totalCount, limit]);


    return (
        <div className={s.root}>
            {pages.map(pNumber =>
                <div
                    key={pNumber}
                    className={cn(s.item, {[s.active]: pNumber === page})}
                    onClick={() => {
                        setPage(pNumber);
                    }}
                >
                    {pNumber}
                </div>
            )}
        </div>
    );
};

export default Pagination;
