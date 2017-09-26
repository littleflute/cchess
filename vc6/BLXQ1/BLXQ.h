
#if !defined(AFX_BLXQ_H__75EF9B3E_7A9D_42DE_BF93_EC1857D105E6__INCLUDED_)
#define AFX_BLXQ_H__75EF9B3E_7A9D_42DE_BF93_EC1857D105E6__INCLUDED_

#if _MSC_VER > 1000
#pragma once
#endif // _MSC_VER > 1000

#include "resource.h"

class CBlWnd
{
public:
	HINSTANCE m_hInst;                              // Ӧ�ó�����ʵ��
	HWND hWnd;                                    // �����ھ��
	HDC m_hdc, m_hdcTmp;                           
	HBITMAP bmpBoard, bmpSelected, bmpPieces[24]; // ��ԴͼƬ���
	int sqSelected, mvLast;                       // ѡ�еĸ��ӣ���һ����
	BOOL bFlipped;                                // �Ƿ�ת����
	
public:
	void Init();
	static void DrawSquare(int sq, BOOL bSelected = FALSE);
	static void ClickSquare(int sq);
	static void DrawBoard(HDC hdc);
	static void prvTest();
	static LRESULT CALLBACK	WndProc(HWND, UINT, WPARAM, LPARAM); 

	// ��ת����
	static inline int SQUARE_FLIP(int sq) {
		return 254 - sq;
	}

	// װ����ԴͼƬ
	inline HBITMAP LoadResBmp(int nResId) {
		return (HBITMAP) LoadImage(m_hInst, MAKEINTRESOURCE(nResId), 
			IMAGE_BITMAP, 0, 0, 
			LR_DEFAULTSIZE | LR_SHARED);
	}

};
#endif // !defined(AFX_BLXQ_H__75EF9B3E_7A9D_42DE_BF93_EC1857D105E6__INCLUDED_)
