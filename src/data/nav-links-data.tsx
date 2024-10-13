import React from 'react';

import { NavLinkProp } from '../components/nav-links/nav-links';
import KitchenOutlined from '@mui/icons-material/KitchenOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import AssignmentTurnedInOutlined from '@mui/icons-material/AssignmentTurnedInOutlined';
import VerifiedOutlined from '@mui/icons-material/VerifiedOutlined';
import QuizOutlined from '@mui/icons-material/QuizOutlined';
import ReviewsOutlined from '@mui/icons-material/ReviewsOutlined';
import PinDropOutlined from '@mui/icons-material/PinDropOutlined';

export const navLinksData: NavLinkProp[] = [
    { label: 'О компании', icon: <KitchenOutlined />, href: '#about' },
    { label: 'Стоимость ремонта', icon: <BuildOutlinedIcon />, href: '#services' },
    { label: 'Бренды', icon: <AssignmentTurnedInOutlined />, href: '#brands' },
    { label: 'Сертификаты и партнеры', icon: <VerifiedOutlined />, href: '#certificates' },
    { label: 'Вопросы', icon: <QuizOutlined />, href: '#faq' },
    { label: 'Отзывы', icon: <ReviewsOutlined />, href: '#reviews' },
    { label: 'Контакты', icon: <PinDropOutlined />, href: '#contacts' },
];
