import Dexie from 'dexie'

// 1ページあたりの10件でページネーションする
const NUM_PER_PAGE: number = 10

export const getMemoPageCount = async (): Promise<number> => {
  const totalCount = await memos.count()
  const pageCount = Math.ceil(totalCount / NUM_PER_PAGE)
  return pageCount > 0 ? pageCount : 1
}


// IndexedDB に保存するデータの型を定義
export interface MemoRecord {
  datetime: string
  title: string
  text: string
}

// Dexie のインスタンスを生成(データベース名は markdown-editor)
const database = new Dexie('markdown-editor')
// .version(1) はデータベースのバージョン
// .stores() で使用するテーブルとインデックスとなるデータ名を指定
database.version(1).stores({ memos: '&datetime' })
// MemoRecord はデータの型で、2つ目の string はキーとなるデータ（今回は datetime）の型
const memos: Dexie.Table<MemoRecord, string> = database.table('memos')

export const putMemo = async (title: string, text: string): Promise<void> => {
  const datetime = new Date().toISOString()
  await memos.put({ datetime, title, text })
}

export const getMemos = (page: number): Promise<MemoRecord[]> => {
  const offset = (page - 1) * NUM_PER_PAGE
  // memos テーブルからデータを取得する処理
  return memos.orderBy('datetime')
              .reverse()
              .offset(offset)
              .limit(NUM_PER_PAGE)
              .toArray()
}