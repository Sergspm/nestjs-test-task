WITH RECURSIVE _parents_agg AS (
  SELECT id, parent_id
  FROM recursive_table_name -- название таблицы в БД
  WHERE id = ?  -- требуемый ИД
  UNION ALL
  SELECT _child.id, _child.parent_id
  FROM recursive_table_name _child
  INNER JOIN _parents_agg _parent ON _child.id = _parent.parent_id
)
SELECT parent_id
FROM _parents_agg
WHERE parent_id IS NOT NULL;