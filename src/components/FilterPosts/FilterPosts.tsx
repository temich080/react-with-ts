import React from 'react';
import InputUI from "../UI/input/InputUI";
import SelectUI from "../UI/select/SelectUI";

const FilterPosts = ({filter, setFilter}: { filter: any, setFilter: any }) => {
    return (
        <div>
            <InputUI
                value={filter.query}
                placeholder={'Введите поисковый запрос'}
                onChange={(value: string) => setFilter({...filter, query: value})}
            />
            <SelectUI
                value={filter.sort}
                onChange={(value: string) => setFilter({...filter, sort: value})}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
                defaultValue={"Сортировка по"}
            />
        </div>
    );
};

export default FilterPosts;