import React from 'react';

interface ListProps<T> {
    dataSource?: T[];
    renderItem?: (item: T, index: number) => React.ReactNode,
}

// const GenericList = <ItemT,>({
//                                  data,
//                                  onPressListItem,
//                                  keyExtractor,
//                                  headerTitle,
//                                  renderDetails: RenderDetailsComponent
//                              }: ListProps<ItemT>) => {
//
//     const renderItem = ({item}: {item: ItemT}) => (
//         <div>item</div>
//     );
//
//     return (
//         <div
//             ListHeaderComponent={
//                 <div>LIST HEADER</div>
//             }
//             ItemSeparatorComponent={() => <div>separator</div>}
//         />
//     );
// };

// const List = <T>({dataSource, renderItem}: ListProps<T>) => {
//     return (
//         <div>
//
//         </div>
//     );
// };

export default function List<T> ({dataSource, renderItem}: ListProps<T>) {
    if (!renderItem || !dataSource) return <></>;

    const items = dataSource?.map((item, index) => renderItem(item, index))
    return (
        <div>
            ITEMS:
            {items}
        </div>
    );
};