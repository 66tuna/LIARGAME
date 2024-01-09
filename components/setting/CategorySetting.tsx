"use client";

import { FC, useEffect, useState } from "react";


interface DataItem {
    id: string;
    name: string;
}

interface DataList {
    title: string;
    list: DataItem[];
}

import dbList from "../../data/db.json"

const CategorySetting = () => {
    const [dataList, setDataList] = useState<DataList[]>(dbList);

    useEffect(() => {
        console.log(dataList)
    }, [dataList])

    return (
        <div>
            {
                dataList.map((item) => (
                    <CategoryEl key={item.title} title={item.title} />
                ))
            }
        </div>
    );
}

export default CategorySetting;

interface CategoryElPropTypes {
    title: string
}
const CategoryEl: FC<CategoryElPropTypes> = ({ title }) => {
    return (
        <div key={title}>
            {title}
        </div>
    )
}