import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data: any[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    data: [
      {
        id: 1,
        title: 'Title',
        url: 'https://via.placeholder.com/600/92c952',
        thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        id: 2,
        title: 'Title',
        url: 'https://via.placeholder.com/600/771796',
        thumbnailUrl: 'https://via.placeholder.com/150/771796',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        id: 3,
        title: 'Title',
        url: 'https://via.placeholder.com/600/24f355',
        thumbnailUrl: 'https://via.placeholder.com/150/24f355',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
      {
        id: 4,
        title: 'Title',
        url: 'https://via.placeholder.com/600/d32776',
        thumbnailUrl: 'https://via.placeholder.com/150/d32776',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      },
    ],
  });
}
