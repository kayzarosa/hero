import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

import {
  PaginationView,
} from './styles';

interface IPagination {
  limit: number;
  total: number;
  totalButtonsVisible: number;
  offset: number;
  serchCharactersPaginete: (offset: number) => void;
  className?: string;
}

interface IPage {
  pageNumber: number;
}

const Pagination: React.FC<IPagination> = ({
  limit,
  total,
  offset,
  totalButtonsVisible,
  serchCharactersPaginete,
  className
}) => {
  const [currentPage, setCurrentPage] = useState(offset ? offset / limit + 1 : 1);
  const [totalPages, setTotalPages] = useState(Math.ceil(total / limit));
  const [numbersPages, setNumbersPages] = useState<IPage[]>([]);
  const [totalButtons, setTotalButtons] = useState(totalButtonsVisible);

  const calculateMaxVisible = useMemo(() => {
    let maxLeft = (currentPage - Math.floor(totalButtons / 2));
    let maxRigth = (currentPage + Math.floor(totalButtons / 2));

    if (maxLeft < 1) {
      maxLeft = 1;
      maxRigth = totalButtons;
    }

    if (maxRigth > totalPages) {
      const maxLeftAux = totalPages - (totalButtons - 1);
      maxLeft = maxLeftAux < 1 ? 1 : maxLeftAux;
      maxRigth = totalPages;
    }

    return {
      maxLeft,
      maxRigth
    }
  }, [totalButtons, totalPages, currentPage]);

  const createButtons = useMemo(() => {
    const { maxLeft, maxRigth } = calculateMaxVisible;

    let buttons: IPage[] = [];

    let index = 0;
    for (let page = maxLeft; page <= maxRigth; page++) {
      buttons[index] = {
        pageNumber: page
      };

      index++;
    }

    return buttons;
  }, [calculateMaxVisible]);

  const shearchResults = useCallback((page: number) => {
    const calcOffset = page <= 1 ? 0 : ((page * limit) - limit) + 1;

    serchCharactersPaginete(calcOffset);
  }, [serchCharactersPaginete, limit]);

  const updateButtons = useCallback(() => {
    setNumbersPages([]);

    const buttons = createButtons;
    setNumbersPages(buttons);

  }, [createButtons]);

  const setTotalButtonsVisibled = useCallback(() => {
    const telaTamanho = window.innerWidth;

    if (telaTamanho <= 835) {
      setTotalButtons(3);
    } else {
      setTotalButtons(totalButtonsVisible === 3 ? 5 : totalButtonsVisible);
    }
  }, [totalButtonsVisible]);

  const next = useCallback(() => {
    if ((currentPage + 1) > totalPages) {
      return;
    }

    setTotalButtonsVisibled();

    setCurrentPage(currentPage + 1);
    updateButtons();

    shearchResults(currentPage + 1);
  }, [
    currentPage,
    totalPages,
    updateButtons,
    shearchResults,
    setTotalButtonsVisibled
  ]);

  const prev = useCallback(() => {
    if ((currentPage - 1) < 1) {
      return;
    }

    setTotalButtonsVisibled();
    setCurrentPage(currentPage - 1);
    updateButtons();
    shearchResults(currentPage - 1);
  }, [
    currentPage,
    updateButtons,
    shearchResults,
    setTotalButtonsVisibled
  ]);

  const goTo = useCallback((page: number) => {
    if (page > totalPages || page < 1) {
      return;
    }

    setTotalButtonsVisibled();
    setCurrentPage(page);
    updateButtons();
    shearchResults(page);
  }, [
    totalPages,
    updateButtons,
    shearchResults,
    setTotalButtonsVisibled
  ]);

  useEffect(() => {
    updateButtons();
  }, [updateButtons]);

  useEffect(() => {
    setTotalPages(Math.ceil(total / limit));
  }, [total, limit]);

  useEffect(() => {
    if (offset === 0) {
      setCurrentPage(1);
    }
  }, [offset]);

  return (
    <PaginationView className={className}>
      {currentPage !== 1 &&
        <>
          <div className="first" onClick={() => { goTo(1) }}>
            <FiChevronsLeft size={18} />
          </div>
          <div className="prev" onClick={prev}>
            <FiChevronLeft size={18} />
          </div>
        </>
      }
      <div className="numbers">
        {numbersPages.length > 0 && numbersPages.map((numberPage, index) =>
          <div key={index}
            onClick={() => { goTo(numberPage.pageNumber) }}
            className={currentPage === numberPage.pageNumber ? 'active' : 'null'}
          >
            {numberPage.pageNumber}
          </div>
        )}
      </div>
      <div className="next" onClick={next}>
        <FiChevronRight size={18} />
      </div>
      <div className="last" onClick={() => { goTo(totalPages) }}>
        <FiChevronsRight size={18} />
      </div>
    </PaginationView>
  );
};

export default Pagination;
