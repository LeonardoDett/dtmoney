import styled from 'styled-components';


export const Container = styled.div`
  margin-top: 4rem;

  table{
    width:100%;
    border-spacing: 0rem 0.5rem;

    th{
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td:first-child{
      border-radius: 0.25rem 0 0 0.25rem;
    }
    td:last-child{
      border-radius: 0 0.25rem 0.25rem 0;
    }

    td{
      border: 0;
      padding: 1rem 2rem;
      background: var(--shape);
      background: var(--shape);
      color: var(--text-body);
      

      &:first-child{
        color: var(--text-title);
      }
      &.withdraw{
        color: var(--red);
      }

      &.deposit{
        color: var(--green);
      }
    }
  }
`