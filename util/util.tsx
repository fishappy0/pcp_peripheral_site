import {NextPage} from 'next';
export function join_class_name(...cls_names: string[]){
    return cls_names.filter(Boolean).join('');
};
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export function create_dropdown_list(cls_names: string[], drpdwn_items: Array<{name:string, href:string;}>): JSX.Element[]{
    const page = drpdwn_items.map((item) =>(
        <DropdownMenu.Item
            key={item.name}
            className={join_class_name(...cls_names)}>
                <a href={item.href}>{item.name}</a>
        </DropdownMenu.Item>
    ));
    return page;
};
export function create_nav_elements(cls_names: string[], drpdwn_items: Array<{name: string, href: string;}>): JSX.Element[]{
    const page = drpdwn_items.map((item) =>(
        <a
            key={item.name}
            className={join_class_name(...cls_names)
            }href={item.href}>
                {item.name}
        </a>
    ));
    return page;
};