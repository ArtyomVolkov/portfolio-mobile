import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import AppEntry from '@/app/AppEntry';

test('render: AppEntry correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<AppEntry />);
  });
});
